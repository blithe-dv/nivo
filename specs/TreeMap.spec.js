import expect, { spyOn }    from 'expect';
import React, { Component } from 'react';
import { render }           from 'react-dom';
import { TreeMap }          from '../src/';


describe('<TreeMap>', function () {
    this.timeout(10000);

    let node;
    beforeEach(() => {
        node = document.createElement('div');
        document.body.appendChild(node);
    });

    afterEach(() => {
        document.body.removeChild(node);
    });

    const root = { name: 'nivo', children: [
        { name: 'charts', children: [
            { name: 'Pie',    loc: 74467 },
            { name: 'Stack',  loc: 74467 },
            { name: 'Tree',   loc: 74467 },
            { name: 'Bubble', loc: 74467 }
        ]},
        { name: 'utils', children: [
            { name: 'Colors',    loc: 74467 },
            { name: 'Arcs',      loc: 74467 },
            { name: 'Data',      loc: 74467 },
            { name: 'Animation', loc: 74467 }
        ]}
    ]};

    it('should render a treemap', done => {
        render((
            <div style={{ width: 500, height: 300 }}>
                <TreeMap
                    root={root}
                    valueAccessor={d => d.loc}
                    colors="nivo"
                    transitionDuration={0}
                />
            </div>
        ), node, () => {
            setTimeout(() => {

                done();
            }, 400);
        })
    });

    ['squarify', 'slice', 'dice', 'slice-dice'].forEach(mode => {
        it(`should support "${mode}" mode`, done => {
            render((
                <div style={{ width: 500, height: 300 }}>
                    <TreeMap
                        root={root}
                        mode={mode}
                        valueAccessor={d => d.loc}
                        colors="nivo"
                        transitionDuration={0}
                    />
                </div>
            ), node, () => {
                setTimeout(() => {

                    done();
                }, 400);
            });
        });
    });
});
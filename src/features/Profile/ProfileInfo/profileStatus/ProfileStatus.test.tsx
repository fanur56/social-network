import React from "react";
import {create} from "react-test-renderer";
import {ProfileStatus} from "./ProfileStatus";

describe('Profile status component', () => {
    test('Status from props should be in the state', () => {
        const component = create(
            <ProfileStatus
                status={'Vladimir'}
                updateStatus={() => {
                }}
            />
        )
        const instance = component.getInstance();
        // @ts-ignore
        expect(instance?.state?.status).toBe('Vladimir')
    })
    test('after creation <span> should be displayed with correct status', () => {
        const component = create(
            <ProfileStatus
                status={'Vladimir'}
                updateStatus={() => {
                }}
            />
        )
        const root = component.root;
        const span = root.findByType('span')
        expect(span).not.toBe(null)
    })
})
import { FC } from "react";
import { AddMove } from "../examples/AddMove";
import { ButtonModal } from "../examples/ButtonModal";
import { TwoLists } from "../examples/TwoLists";
import { Overview } from "../pages/Overview";

interface Route {
    id: number,
    title: string,
    path: string,
    element: FC
}

export const routes: Route[] = [
    {
        id: 1,
        title: 'Overview',
        path: '/overview',
        element: Overview
    },
    {
        id: 2,
        title: 'AddMove',
        path: '/add-move',
        element: AddMove
    },
    {
        id: 3,
        title: 'ButtonModal',
        path: '/button-modal',
        element: ButtonModal
    },
    {
        id: 4,
        title: 'TwoLists',
        path: '/two-lists',
        element: TwoLists
    }
];
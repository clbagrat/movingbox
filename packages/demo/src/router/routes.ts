import { FC } from "react";
import { AddMovePage } from "../pages/AddMovePage";
import { ButtonModalPage } from "../pages/ButtonModalPage";
import { Overview } from "../pages/Overview";
import { TwoListsPage } from "../pages/TwoListsPage";

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
        element: AddMovePage
    },
    {
        id: 3,
        title: 'ButtonModal',
        path: '/button-modal',
        element: ButtonModalPage
    },
    {
        id: 4,
        title: 'TwoLists',
        path: '/two-lists',
        element: TwoListsPage
    }
];
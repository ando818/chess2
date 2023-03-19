import { SvelteComponentTyped } from "svelte";
declare class __sveltets_Render<Groups extends (0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15)[] | undefined, MembershipsAndFilter extends Groups extends undefined ? (0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15)[] : undefined> {
    props(): {
        groups: Groups;
    } | {
        filter: MembershipsAndFilter;
        memberships: MembershipsAndFilter;
    };
    events(): {} & {
        [evt: string]: CustomEvent<any>;
    };
    slots(): {
        default: {};
    };
}
export declare type CollisionGroupsProps<Groups extends (0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15)[] | undefined, MembershipsAndFilter extends Groups extends undefined ? (0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15)[] : undefined> = ReturnType<__sveltets_Render<Groups, MembershipsAndFilter>['props']>;
export declare type CollisionGroupsEvents<Groups extends (0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15)[] | undefined, MembershipsAndFilter extends Groups extends undefined ? (0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15)[] : undefined> = ReturnType<__sveltets_Render<Groups, MembershipsAndFilter>['events']>;
export declare type CollisionGroupsSlots<Groups extends (0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15)[] | undefined, MembershipsAndFilter extends Groups extends undefined ? (0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15)[] : undefined> = ReturnType<__sveltets_Render<Groups, MembershipsAndFilter>['slots']>;
export default class CollisionGroups<Groups extends (0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15)[] | undefined, MembershipsAndFilter extends Groups extends undefined ? (0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15)[] : undefined> extends SvelteComponentTyped<CollisionGroupsProps<Groups, MembershipsAndFilter>, CollisionGroupsEvents<Groups, MembershipsAndFilter>, CollisionGroupsSlots<Groups, MembershipsAndFilter>> {
}
export {};

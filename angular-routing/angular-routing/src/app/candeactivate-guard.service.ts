import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

export interface IDeactivateComponent {
    canExit(): boolean | Observable<boolean> | Promise<boolean>;
}

export class CanDeactivateGuardService implements CanDeactivate<IDeactivateComponent>{

    canDeactivate(
        component: IDeactivateComponent,
        currentRoute: ActivatedRouteSnapshot,
        currentState: RouterStateSnapshot,
        nextState: RouterStateSnapshot
    ): boolean | Observable<boolean> | Promise<boolean> {
        return component.canExit();
    }
}

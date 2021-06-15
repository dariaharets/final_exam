import { Ref } from "vue";
import { IMarker, IPolyline, IPolygon, IRectangle, ICircle, IMarkerOptions, IPolylineOptions, IPolygonOptions, IRectangleOptions, ICircleOptions } from "../@types/index";
export declare type IComponent = IMarker | IPolyline | IPolygon | IRectangle | ICircle;
export declare type IComponentOptions = IMarkerOptions | IPolylineOptions | IPolygonOptions | IRectangleOptions | ICircleOptions;
export declare const useSetupMapComponent: (componentName: "Marker" | "Polyline" | "Polygon" | "Rectangle" | "Circle", events: string[], options: Ref<IComponentOptions>, emit: (event: string, ...args: unknown[]) => void) => {
    component: Ref<IComponent | null>;
};

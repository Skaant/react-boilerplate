import { BuildingProps } from "../../../../../data/buildings/_types/props/BuildingProps";

export function mergeDataProps(props: BuildingProps[]): BuildingProps[] {
  return Object.values(
    props.reduce((merge, prop) => {
      if (merge[prop.type]) {
        merge[prop.type] = {
          type: prop.type,
          value: merge[prop.type].value + prop.value,
        } as BuildingProps;
      } else {
        merge[prop.type] = prop;
      }
      return merge;
    }, {} as { [key in BuildingProps["type"]]: BuildingProps })
  );
}

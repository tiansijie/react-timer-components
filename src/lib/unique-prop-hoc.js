export default function uniquePropHOC(uniqueProperties) {
	return function (Component) {
		return function UniquePropComponent(props) {
			const propertiesHad = uniqueProperties.filter(prop => props[prop] !== undefined);
			const hasMultiple =  propertiesHad.length > 1;
			const hasNone = propertiesHad.length === 0;
			if (hasMultiple) {
				throw new Error(`this component requires only of ${uniqueProperties.join(",")} but has multiple: ${propertiesHad.join(",")}`);
			}
			if (hasNone) {
				throw new Error(`this component expected one of ${uniqueProperties.join(",")} but had none`);
			}
			return <Component {...props} />;
		}
	}
}
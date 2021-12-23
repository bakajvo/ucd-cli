import meow from 'meow';
import meowHelp from 'cli-meow-help';

const commands = {
	createVersion: {
		desc: `Creates a new version in UCD`
	},
};

const flags = {
	component: {
		type: 'string',
		desc: 'Component name',
		isRequired: (_flags, input) => input.includes('createVersion')
	},
	componentVersion: {
		type: 'string',
		desc: 'Component in version',
		isRequired: (_flags, input) => input.includes('createVersion')
	},
	debug: {
		type: `boolean`,
		default: false,
		alias: `d`,
		desc: `Print debug info`
	},
	version: {
		type: `boolean`,
		alias: `v`,
		desc: `Print CLI version`
	}
};

const helpText = meowHelp({
	name: `ucd-cli`,
	flags,
	commands
});

const cli = meow(helpText, {
	importMeta: import.meta,
	booleanDefault: undefined,
	allowUnknownFlags: false,
	flags
});

export default cli;
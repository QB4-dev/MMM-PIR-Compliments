# MMM-PIR-Compliments
This is an extension for the [MagicMirror](https://github.com/MichMich/MagicMirror). It uses the USER_PRESENCE notification of [MMM-PIR-Sensor](https://github.com/paviro/MMM-PIR-Sensor) to display the compliments module for a specified time.
This module is simplified version of https://github.com/semox/MMM-NearCompliments

## Installation
1. Navigate into your MagicMirror's `modules` folder and execute `git clone https://github.com/QB4-dev/MMM-PIR-Compliments`.
2. Configure config/config.js with documentation below.
4. Reboot your MagicMirror.

## Using the module

To use this module, add it to the modules array in the `config/config.js` file:
````javascript
modules: [
	{
		module: 'MMM-PIR-Compliments',
		config: {
		    animationSpeed: 200,
		    delay: 10
		}
	}
]
````

## Configuration Options

The following properties can be configured:

<table width="100%">
	<!-- why, markdown... -->
	<thead>
		<tr>
			<th>Option</th>
			<th width="100%">Description</th>
		</tr>
	<thead>
	<tbody>
		<tr>
			<td><code>animationSpeed</code></td>
			<td>Animation speed in ms to show/hide compliments module.
				<br><b>Possible values:</b> <code>int</code>
				<br><b>Default value:</b> <code>200</code>
			</td>
		</tr>
		<tr>
			<td><code>delay</code></td>
			<td>Delay defined in seconds to show compliments module.
				<br><b>Possible values:</b> <code>int</code>
				<br><b>Default value:</b> <code>30</code>
			</td>
		</tr>
	</tbody>
</table>

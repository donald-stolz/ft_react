# Creates new TypeScript React component in specified directory
# By Don Stolz - https://github.com/donald-stolz
# Orginal script & idea from Nieky Allen - https://github.com/dallen4

# Initialize default values
name="NewComponent"
directory="src/components"

# Gather command line arguments
while [ "$1" != "" ]; do
    case $1 in
        -n  )   shift
                name=$1
                ;;
        -d  )   shift
                directory=$1
                ;;
    esac
    shift
done

# Create new component directory
mkdir $directory/$name

# Create index.ts to export component from directory
echo "import $name from './$name';

export default $name;" >> $directory/$name/index.ts

# Create baseplate for component
echo "// $name component
import React from 'react';
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';

interface State {};

interface Props {
	classes: any;
}

class $name extends React.Component<Props, State> {
	state: State = {};

	render() {
		const { classes } = this.props;

		return (
			<div>$name</div>
		);
	}
}

export default withStyles(styles)($name);
" >> $directory/$name/$name.tsx

# Create styles file
echo "// $name styles
import {createStyles} from '@material-ui/core';

export default createStyles((theme: any) => ({}));
" >> $directory/$name/styles.ts

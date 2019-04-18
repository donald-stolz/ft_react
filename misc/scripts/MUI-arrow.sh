# creates new React component in specified director
# Orginal author Nieky Allen - https://github.com/dallen4
# Edited for Material UI by Don Stolz - https://github.com/donald-stolz

# init default values
name="NewComponent"
directory="src/components"

# gather command line arguments
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

# create new component directory
mkdir $directory/$name

# create index.js to export component from directory
echo "import $name from './$name';

export default $name;" >> $directory/$name/index.js

# create baseplate for component
echo "// $name component
import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';

const $name = (props) => {
	return <div>$name</div>;
}

$name.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)($name);
" >> $directory/$name/$name.js

# create styles file
echo "// $name styles
const styles = theme => ({});

export default styles;" >> $directory/$name/styles.js
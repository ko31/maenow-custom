<?php
/**
 * Detect if current page has table of contents.
 *
 * @return bool
 */
function maenow_has_table_of_contents() {
	if ( is_single() ) {
		return true;
	}

	return false;
}


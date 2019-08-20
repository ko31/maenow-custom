<?php
/**
 * Show table of contents in post automatically.
 */
add_filter( 'snow_monkey_display_contents_outline', function () {
	return maenow_has_table_of_contents();
} );

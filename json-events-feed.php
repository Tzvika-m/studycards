<?php
// If posts aren't set
if(!isset($_POST['hiddenStart'], $_POST['hiddenEnd'], $_POST['hiddenAllDay'])) {
    // Output error msg
    echo "Post data not set";
} else {
    try {
        // Establish new connection with database
        $connection = new PDO("localhost", "root", 1234);

        // Prepare and Execute query
        $query = "SELECT * FROM event";
        $sth = $connection->prepare($query);
        $sth->execute();

        // Returning array
        $return_array = array();
        // Event array
        $event_array;

        // Get the result
        while ($row = $sth->fetch(PDO::FETCH_ASSOC) {
            // Create a new array for the event
            $event_array = array();
            // Add data from database to the event array
            $event_array['id'] = $row['id'];
            $event_array['title'] = "Some title...";
            $event_array['start'] = $row['start'];
            $event_array['end'] = $row['end'];
            $event_array['allDay'] = false;
            // Merge the event array into the return array
            array_push($return_array, $event_array);
        }
    // Output the json feed as we need it to render the calendar
    echo json_encode($return_array);

    } catch (PDOException $e){
        // Output PDO error message
        echo $e->getMessage();
    }
}
?>
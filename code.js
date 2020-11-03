$(document).ready(
    function () {
        // add event listener (clicks, etc.)
        $("input[name=rank]").change(updateButton);
        $("form").submit(placeOrder);
        // any other functions
        function placeOrder (event)
        {
            // stop the flashing form!
            event.preventDefault();

            //ask jquery for selected shipping button
            var selectedButton = $("input[name=rank]:checked");
            $(".output").show();
        }
        function updateButton ()
        {
            var selectedButton = $("input[name=rank]:checked");
            var ranking = selectedButton.val();

            $("#rankOutput").text((ranking));



        }
    }
);
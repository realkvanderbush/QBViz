### The Problem
-----

Standard metrics for Quarterback assessment only quantify outcomes. They can be skewed due to externalities, and really don't give great insight into the quality of decisions that are being made during the play.


### A New Way
-----

The NFL placed sensors on players during the 2007 season, giving a new, robust source of data for analyzing what happens during play. Using this data, we've devised a method to isolate the moment that the quarterback decided to pass the ball, and also evaluate all other opportunities at that moment.

### Evaluating Opportunity
-----

By extracting key features from the critical decision points of these plays, we can score quarterbacks based on their decision history rather than their outcome history. We use the selected receivers' outcomes to train a random forest model and extrapolate completion probabilities to the remaining receivers that were not selected. Additionally, we combine this probability with an "Expected Yards Added" metric (nflWAR). Using this new metric, Expected Points Added, we can compare a quarterback's selected receiver to the expected outcomes of all other eligible receivers on the field. With this innovative approach, we can better control for the events _during_ a play rather than simply the outcome.

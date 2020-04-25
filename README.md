# Nonogram

*By AlurienFlame*

##### Win Condition

Win by using `left click` to select every cell containing a hidden <span style="color:blue">objective</span>.

##### Loss Condition

You will lose the game if you get three <span style="color:red">strikes</span>. You get <span style="color:red">strikes</span> by selecting cells that _do not_ contain objectives.

##### Marking

Use `right click` to <span style="color:green">mark</span> cells. This has no effect on gameplay, but can be essential for remembering which cells do not contain objectives. Think of it like using flags in minesweeper.

##### Numbers

The numbers indicate how many <span style="color:blue">objectives</span> are adjacent to each other in a column or row. Dashes indicate gaps of any length between groups of <span style="color:blue">objectives</span>.

For example, a row labled `3-1` in a five cell wide board would indicate the following pattern:
<span style="color:blue">OOO</span><span style="color:red">O</span><span style="color:blue">O</span>

##### Summary
* <span style="color:blue">Objectives</span> - Find all of these.
* <span style="color:red">Strikes</span> - You will lose if you get three of these.
* <span style="color:green">Marks</span> - Use these to remember where objectives aren't.

##### Planned Features

* Colorblind mode
* Sound effects
* Customizable difficulty
Feature: Demo Account

Scenario: Visiting Demo Page

    When I open the Demo Page
    Then clear and reload
    and redirected to Walkthrough
    and the Demo Prompt exists
    and the Walkthrough Modal exists and is visible
    and click the Start button
    and the header is My Planner
    and redirected to Planner

Scenario: Visiting Demo Page a second time   

    When I open the Demo Page
    then redirected to Planner
    and the header is My Planner
    and the Demo Prompt exists

    
WITH MonthlySignups AS (
    SELECT 
        DATE_FORMAT(DateJoined, '%M') AS Month,  -- Display full month name
        DATE_FORMAT(DateJoined, '%Y-%m') AS MonthSort,  -- Keep this for sorting
        COUNT(*) AS Signups,
        LAG(COUNT(*)) OVER (ORDER BY DATE_FORMAT(DateJoined, '%Y-%m')) AS PreviousSignups
    FROM maintable_VB7PA
    GROUP BY MonthSort
)

SELECT 
    Month, 
    Signups - PreviousSignups AS MonthToMonthChange
FROM MonthlySignups
WHERE PreviousSignups IS NOT NULL;

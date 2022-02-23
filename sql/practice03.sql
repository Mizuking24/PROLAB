SELECT
  商品名,
  count(色='赤' or null) AS "赤",
  count(色='青' or null) AS "青",
  count(色='黄' or null) AS "黄",
  count(色='白' or null) AS "白",
  count(色='黒' or null) AS "黒"
FROM
  (
    SELECT  toys.id,  name  AS  "商品名",  colortable.color  AS  "色",  price  AS  "値段"  FROM  prolab_sql_task.toys
    INNER JOIN  prolab_sql_task.colortable
    ON  prolab_sql_task.toys.colorcode = prolab_sql_task.colortable.colorcode
  ) AS sub
GROUP BY
  商品名;
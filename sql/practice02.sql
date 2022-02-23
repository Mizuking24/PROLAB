SELECT  toys.id,  name  AS  "商品名",  colortable.color  AS  "色",  price  AS  "値段"  FROM  prolab_sql_task.toys
	INNER JOIN  prolab_sql_task.colortable
  ON  prolab_sql_task.toys.colorcode = prolab_sql_task.colortable.colorcode;
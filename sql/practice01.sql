CREATE  TABLE  prolab_sql_task.toys  (
	id  INT  NOT NULL  PRIMARY KEY  AUTO_INCREMENT,
  name VARCHAR(255)  NOT NULL,
  colorcode  VARCHAR(255)  NOT NULL,
  price  INT  NOT NULL,
  remarks  VARCHAR(255)  DEFAULT NULL
);

CREATE  TABLE  prolab_sql_task.colortable  (
	id  INT  NOT NULL  PRIMARY KEY  AUTO_INCREMENT,
  colorcode  VARCHAR(255)  NOT NULL,
  color  VARCHAR(255)  NOT NULL
);

INSERT  INTO
	prolab_sql_task.toys
   (id,  name,  colorcode,  price)
   VALUES
   (1,  "パーティ衣装",  "002",  1680),
   (2,  "ブリキのおもちゃ",  "001",  412),
   (3,  "ゾンビのマスク",  "005",  568),
   (4,  "ブリキのおもちゃ",  "004",  412),
   (5,  "ゾンビのマスク",  "002",  568),
   (6,  "ブリキのおもちゃ",  "005",  412),
   (7,  "ゾンビのマスク",  "001",  568),
   (8,  "ゾンビのマスク",  "004",  568),
   (9,  "パーティ衣装",  "001",  1680),
   (10,  "パーティ衣装",  "004",  1680),
   (11,  "パーティ衣装",  "005",  1680),
   (12,  "ブリキのおもちゃ",  "001",  412),
   (13,  "パーティ衣装",  "001",  1680),
   (14,  "ゾンビのマスク",  "004",  568),
   (15,  "パーティ衣装",  "003",  1680),
   (16,  "ブリキのおもちゃ",  "003",  412),
   (17,  "ブリキのおもちゃ",  "003",  412),
   (18,  "パーティ衣装",  "003",  1680),
   (19,  "ブリキのおもちゃ",  "002",  412),
   (20,  "ゾンビのマスク",  "001",  568);


INSERT  INTO
  prolab_sql_task.colortable
  (id,  colorcode,  color)
  VALUES
  (1,  "001",  "赤"),
  (2,  "002",  "青"),
  (3,  "003",  "黄"),
  (4,  "004",  "白"),
  (5,  "005",  "黒");
CREATE TABLE "messages" (
  "id" serial primary key,
  "title" varchar(60) not null,
  "text" varchar(140) not null,
  "timestamp" timestamp not null
);

INSERT INTO "messages" (id, "title", "text", timestamp) 
VALUES (1, 'The Oasis', 'Into the Metaverse.', NOW()),
(2, 'Pay', 'Over the Wire', NOW());
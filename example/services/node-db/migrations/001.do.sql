-- Add SQL in this file to create the database tables for your API
CREATE TABLE Nodes (
  id INTEGER PRIMARY KEY,
  name VARCHAR(255),
  type VARCHAR(20) NOT NULL,
  parentId VARCHAR(255),
  custom TEXT,
  weight INTEGER,
  icon VARCHAR(255),
  referenceId VARCHAR(255),
  description TEXT,
  channelNumber INTEGER
);

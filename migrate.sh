#! /bin/bash
sequelize-cli db:seed:undo:all
sequelize-cli db:migrate:undo:all
sequelize-cli db:migrate
sequelize-cli db:seed:all
# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, foreign_key: true|
|email|string|null: false, foreign_key: true|
|password|string|null: false|
|groups_id|integer|
|comment_id|integer|

### Association
- has_many :group
- has_many :comment
- belongs_to :users_groups

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, foreign_key: true|
|users_id|integer|null: false, foreign_key: true|
|comment_id|integer|

### Association
- belongs_to :user
- has_many :comment
- has_many :users_groups
# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20131024084356) do

  create_table "ardences", :force => true do |t|
    t.string   "title"
    t.text     "content"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "candidates", :force => true do |t|
    t.string   "a1"
    t.text     "a2"
    t.boolean  "a3"
    t.text     "a4"
    t.text     "a5"
    t.text     "a6"
    t.text     "a7"
    t.boolean  "a8"
    t.text     "a9"
    t.text     "a10"
    t.string   "e1"
    t.string   "e2"
    t.string   "e3"
    t.string   "e4"
    t.string   "e5"
    t.text     "e6"
    t.text     "email"
    t.string   "f1"
    t.date     "f2"
    t.integer  "f3"
    t.string   "f4"
    t.boolean  "f8"
    t.boolean  "f9"
    t.text     "f10"
    t.text     "f11"
    t.string   "o1"
    t.text     "o2"
    t.string   "o3"
    t.string   "o4"
    t.integer  "o5"
    t.text     "o6"
    t.boolean  "r1"
    t.string   "r2"
    t.boolean  "s1"
    t.text     "s2"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "directors", :force => true do |t|
    t.string   "etablissement"
    t.text     "adresse"
    t.string   "enseignant"
    t.text     "coordonnees"
    t.string   "classe"
    t.boolean  "atteste"
    t.boolean  "declare"
    t.string   "lieu"
    t.datetime "created_at",    :null => false
    t.datetime "updated_at",    :null => false
  end

  create_table "feedbacks", :force => true do |t|
    t.integer  "accu0322"
    t.integer  "appl0320"
    t.integer  "appr0320"
    t.integer  "arti0320"
    t.integer  "atte0320"
    t.integer  "buff0322"
    t.integer  "chro0322"
    t.integer  "conc0320"
    t.integer  "dure0322"
    t.integer  "etud0320"
    t.integer  "form0322"
    t.integer  "info0322"
    t.integer  "lieu0322"
    t.boolean  "mati0320"
    t.boolean  "mati0322"
    t.integer  "nomb0322"
    t.integer  "proc0322"
    t.integer  "role0320"
    t.text     "sugg0320"
    t.text     "sugg0322"
    t.boolean  "tant0320"
    t.boolean  "tant0322"
    t.integer  "tech0320"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "newsletters", :force => true do |t|
    t.text     "a"
    t.text     "content"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "registrations", :force => true do |t|
    t.string   "activity"
    t.text     "address"
    t.integer  "charge"
    t.string   "city"
    t.boolean  "dedication"
    t.string   "email"
    t.integer  "fax"
    t.boolean  "festival"
    t.string   "first_name"
    t.string   "function"
    t.boolean  "guest"
    t.boolean  "hardship"
    t.string   "institution"
    t.boolean  "invoice"
    t.string   "last_name"
    t.boolean  "lunch_1"
    t.boolean  "lunch_2"
    t.boolean  "payment"
    t.integer  "phone"
    t.integer  "zip"
    t.datetime "created_at",  :null => false
    t.datetime "updated_at",  :null => false
  end

  create_table "videos", :force => true do |t|
    t.string   "title"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

end

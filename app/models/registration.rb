# coding: utf-8
class Registration < ActiveRecord::Base
  attr_accessible :activity, :address, :charge, :city, :dedication, :email, :fax, :festival, :first_name, :function, :guest, :hardship, :institution, :invoice, :last_name, :lunch_1, :lunch_2, :payment, :phone, :zip
end

# coding: utf-8
class Registration < ActiveRecord::Base

  attr_accessible :activity, :address, :city, :dedication, :email, :draft_fax, :festival, :first_name, :function, :guest, :hardship, :institution, :invoice, :last_name, :lunch_1, :lunch_2, :draft_phone, :draft_zip

  validates_presence_of :address, :activity, :city, :draft_phone, :draft_zip, :email, :first_name, :function, :institution, :last_name
  validates_format_of :email, :with => /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\Z/
  validates_format_of :charge, :with => /\A\s*\d+\s*\Z/, allow_nil: true

  validate :at_least_one_presence

  def draft_zip
    zip if zip
  end
  def draft_zip=(draft)
    self.zip = draft.gsub(/\W+/, '') if draft.present?
  end

  def draft_phone
    phone if phone
  end
  def draft_phone=(draft)
    self.phone = draft.gsub(/\W+/, '')if draft.present?
  end

  def draft_fax
    fax if fax
  end
  def draft_fax=(draft)
    self.fax = draft.gsub(/\W+/, '') if draft.present?
  end

  # def draft_invoice
  #   if invoice.nil?
  #     nil
  #   elsif invoice
  #     "institution"
  #   else
  #     "name"
  #   end
  # end
  # def draft_invoice=(draft)
  #   if draft.present?
  #     if draft == "institution"
  #       self.invoice = true
  #     elsif draft == "name"
  #       self.invoice = false
  #     end
  #   end
  # end

  # def draft_payment
  #   if payment.nil?
  #     nil
  #   elsif payment
  #     "cheque"
  #   else
  #     "virement"
  #   end
  # end
  # def draft_payment=(draft)
  #   if draft.present?
  #     if draft == "cheque"
  #       self.payment = true
  #     elsif draft == "virement"
  #       self.payment = false
  #     end
  #   end
  # end

  # def draft_charge
  #   charge / 20 if charge
  # end
  # def draft_charge=(draft)
  #   self.charge = draft.to_i * 20 if draft.present?
  # end

  def at_least_one_presence
    unless dedication || festival || hardship
      errors[:base] << "Vous devez assister à un événement au moins."
    end
  end
end

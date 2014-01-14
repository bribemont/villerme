# coding: utf-8
class RegistrationMailer < ActionMailer::Base
  default from: "fondation@univ-montp1.fr"

  def registration_confirmation(registration)
    @registration = registration

    mail to: registration.email, subject: "Les Rencontres Villermé - Confirmation d'inscription"
  end
end

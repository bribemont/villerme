# coding: utf-8
class CandidateMailer < ActionMailer::Base
  default from: "fondation@univ-montp1.fr"

  def candidacy_confirmation(candidate)
    @candidate = candidate

    mail to: candidate.email, subject: "Les Rencontres Villermé - Confirmation de candidature"
  end
end

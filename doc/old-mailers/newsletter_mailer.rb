# coding: utf-8
class NewsletterMailer < ActionMailer::Base
  default from: "fondation@univ-montp1.fr"

  def on_demand(newsletter)
    @newsletter = newsletter
    @html_content = newsletter.content.gsub(/(.+?)\s*\n+/, '<p style="margin:5px">\1</p>')
    mail to: newsletter.a, subject: "Les Rencontres Villermé"
  end
end

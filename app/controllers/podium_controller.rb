# coding: utf-8
class PodiumController < ApplicationController
  def index
    @images = Hash[6350245, "Jean Auroux (ancien Ministre)", 6350236, "Emmanuel Albert (ARACT)", 6350237, "Dr François antoniou (Ametra)", 6350238, "Pr Paul Henri Antonmattei", 6350239, "François Delemotte (chef du pôle travail Direccte LR)", 6350240, "Pr Jacques Touchon", 6350241, "Véronique Demon (directrice de l’Ametra)", 6350242, "Karim Rafaï (Directeur d’ERDF-LR)", 6350243, "Bernard Boudon (CARSAT LR)", 6350244, "Dr Dominique Prentout (Ametra)", 6350246, "Irène Bianzina et Christine Dufiet (CIBC)", 6350247, "Evelyne Cance (Apave)", 6350248, "Pr Jacques Touchon, Jean Auroux et Yves Jolis", 6350249, "Evelyne Cance et Corine Grandou-Faivre (Apave)", 6350250, "Table ronde du 20 mars 2013", 6350251, "Max Ponseillé (Président de la Fondation)", 6350252, "B. Dufrenne (réalisatrice)", 6350253, "C. Delbourg (chef d’entreprise)", 6350254, "Dr François Antoniou", 6350255, "Y. Bongiorno (CGT)", 6350256, "Pr Jacques Birouste", 6350257, "Isabelle Bergé (DRH de Dalkia)", 6350258, "Jean Auroux et Isabelle Bergé (DRH de Dalkia)", 6350259, "Jean Auroux", 6350260, "Vote du public", 6350261, "Les membres du Jury s’interrogent", 6350262, "Drs Dominique Prentout et François Antoniou (Ametra)", 6350263, "Henri Nury (CFTC)"]
    # @documents = Hash["ARACT LR - Entreprendre", [6350234, "ppt", "Présentation PowerPoint"], "Inn-PACT SUPPORT 20 MARS FONDATION ENTREPRENDRE", [6350235, "pdf", "Document PDF"], "Proposition du CIBC - Les Rencontres de Villermé", [6350233, "pptx", "Présentation PowerPoint XML"]]
  end
end
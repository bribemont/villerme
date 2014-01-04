class Director < ActiveRecord::Base
  attr_accessible :adresse, :atteste, :classe, :coordonnees, :declare, :enseignant, :etablissement, :lieu
end

class TypeSerializer < ActiveModel::Serializer
  attributes :id, :name, :strong_against, :weak_against, :immune_to
end

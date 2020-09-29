class CreatePokemonTeams < ActiveRecord::Migration[6.0]
  def change
    create_table :pokemon_teams do |t|
      t.references :team, null: false, foreign_key: true
      t.references :pokemon, null: false, foreign_key: true

      t.timestamps
    end
  end
end
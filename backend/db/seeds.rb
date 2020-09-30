# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'poke-api-v2'

#get types from API
for i in 1..18
    type = PokeApi.get(type: i)
    newType = Type.create(name: type.name, strong_against: [], weak_against: [], immune_to: [])
    
    for j in 1..type.damage_relations.half_damage_from.length
        newType["strong_against"].push(type.damage_relations.half_damage_from[j - 1].name)
    end
    for j in 1..type.damage_relations.double_damage_from.length
        newType["weak_against"].push(type.damage_relations.double_damage_from[j - 1].name)
    end
    for j in 1..type.damage_relations.no_damage_from.length
        newType["immune_to"].push(type.damage_relations.no_damage_from[j - 1].name)
    end

    newType.save
end

#get Pokemon data from API
for i in 1..807
    pokemon = PokeApi.get(pokemon: i)
    newPokemon = Pokemon.create(name: pokemon.name.capitalize(), img_url: pokemon.sprites.front_default)
    for j in 1..pokemon.types.length
        type = Type.find_by(name: pokemon.types[j-1].type.name)
        PokemonType.create(pokemon_id: pokemon.id, type_id: type.id)
    end
end

#Fix some nonstandard Pokemon names
Pokemon.find_by(name: "Nidoran-f").update(name: "Nidoran(F)")
Pokemon.find_by(name: "Nidoran-m").update(name: "Nidoran(M)")
Pokemon.find_by(name: "Farfetchd").update(name: "Farfetch'd")
Pokemon.find_by(name: "Mr-mime").update(name: "Mr. Mime")
Pokemon.find_by(name: "Ho-oh").update(name: "Ho-Oh")
Pokemon.find_by(name: "Mime-jr").update(name: "Mime Jr.")
Pokemon.find_by(name: "Porygon-z").update(name: "Porygon-Z")
Pokemon.find_by(name: "Type-null").update(name: "Type: Null")
Pokemon.find_by(name: "Tapu-koko").update(name: "Tapu Koko")
Pokemon.find_by(name: "Tapu-lele").update(name: "Tapu Lele")
Pokemon.find_by(name: "Tapu-bulu").update(name: "Tapu Bulu")
Pokemon.find_by(name: "Tapu-fini").update(name: "Tapu Fini")
Pokemon.find_by(name: "Deoxys-normal").update(name: "Deoxys")
Pokemon.find_by(name: "Darmanitan-standard").update(name: "Darmanitan")
Pokemon.find_by(name: "Wormadam-plant").update(name: "Wormadam")
Pokemon.find_by(name: "Giratina-altered").update(name: "Giratina")
Pokemon.find_by(name: "Shaymin-land").update(name: "Shaymin")
Pokemon.find_by(name: "Basculin-red-striped").update(name: "Basculin")
Pokemon.find_by(name: "Tornadus-incarnate").update(name: "Tornadus")
Pokemon.find_by(name: "Thundurus-incarnate").update(name: "Thundurus")
Pokemon.find_by(name: "Landorus-incarnate").update(name: "Landorus")
Pokemon.find_by(name: "Keldeo-ordinary").update(name: "Keldeo")
Pokemon.find_by(name: "Meloetta-aria").update(name: "Meloetta")
Pokemon.find_by(name: "Meowstic-male").update(name: "Meowstic")
Pokemon.find_by(name: "Aegislash-shield").update(name: "Aegislash")
Pokemon.find_by(name: "Pumpkaboo-average").update(name: "Pumpkaboo")
Pokemon.find_by(name: "Gourgeist-average").update(name: "Gourgeist")
Pokemon.find_by(name: "Oricorio-baile").update(name: "Oricorio")
Pokemon.find_by(name: "Lycanroc-midday").update(name: "Lycanroc")
Pokemon.find_by(name: "Wishiwashi-solo").update(name: "Wishiwashi")
Pokemon.find_by(name: "Minior-red-meteor").update(name: "Minior")
Pokemon.find_by(name: "Mimikyu-disguised").update(name: "Mimikyu")
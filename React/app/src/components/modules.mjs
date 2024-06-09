
export function Song(id, title, music, description = "", image = "./gandalf.gif"){
    this.id = id
    this.title = title
    this.music = music
    this.description = description
    this.image = image
}

export const FAKE_SONGS = [
    new Song(1, "Set 1","./Jamie xx Boiler Room London x Young Turks DJ Set.mp3", "Channel 1", "./hqdefault.webp"),
    new Song(2, "Set 2" ,"./What Happens In One Minute.mp3" ),
    new Song(3, "Set 3","./Jamie xx Boiler Room London x Young Turks DJ Set.mp3", "Ahahahaaha", "./mqdefault_6s.webp")
]



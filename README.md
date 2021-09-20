# Overlord Sheets

Overlord Sheets is a comprehensive redesign of character sheets of old. The aim is to create an experience like that of OrcPub with perhaps a little more legal compliance. Currently, this project is in early, pre-alpha development. If you wish to support the project please consider supporting me on Patreon(linked below)!

Below is the current roadmap of the project. Currently, I estimate an alpha v1.0 dpeloyment in December of this year however this will be adjusted as necessary. I am a fairly green developer and thus my roadmap may not always be accurate and is definitely subject to change.

This app was bootstrapped with

```
npx create-next-app
```

and is built using Next.JS and Node.JS. If you download this code and wish to demo the site on your own machine

```
npm run dev
```

and navigate to http://localhost:3000 by default. Note that this functionality will be disabled upon completion of database linking and much of the site functionality will break unless you seed and manage your own local database.

# Roadmap

## Front End Design

### Character Sheet Visuals v1.0

- basic combat stats: 100%

- stats: 90% [Animation rework pending]

- skill components: 50% [Pending completion on functionality]

- spell component: 0%

- equipment component 0%

- feats component + racial traits 0%

- class features 0%

Currently: setting up a react-redux store, need some character stats to be available in a global state

## Front End Functionality

### Character Sheet Functionality v1.0

#### Basic Combat Stats [Currently waiting on database functionality to continue]

- Dynamic HP Track 75%
- Dynamic Hit Dice Track 75%
- Inspiration Track 75%

---

#### Stat Component

- Click Animation 100% [potential rework incoming]
- Stat mod update 75%

---

#### Skill Component

- Proficiency/expertise affects mods 20% [working on redux store]
- Auto update of modifiers 0% [pending work on redux store]

---

#### Spell Component 0%

---

#### Equipment Component 0%

---

#### Feats/Racial Traits Component 0%

---

#### Class Features 0%

---

## Database

### User Storage

- User Authentication 10%
- DB Models
- Password Encryption

### Character Storage

- Overall Model 5%
- Backgrounds
- Classes
- Subclasses
- Races
- Equipment

## Server

- Basic Deployment 0%

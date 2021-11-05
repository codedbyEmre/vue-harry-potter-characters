<template>
  <div class="container-md my-5">
      <div class="row mb-5">
          <div class="col-xl-2 col-lg-3 col-md-4">
              <div class="row">
                    <!-- Filter by house -->
                    <div class="col-md-12 mb-4">
                        <select class="form-select py-2 text-capitalize" v-model="filterByHouse">
                            <option value="">All Houses</option>
                            <option :value="house" v-for="house in eliminateRepeatedHouse($store.state.characters)" :key="house">
                                {{house}}
                            </option>
                        </select>
                    </div>
                    <!-- Filter by patronus -->
                    <div class="col-md-12 mb-4">
                        <select class="form-select py-2 text-capitalize" v-model="filterByPatronus">
                            <option value="">All Patronuses</option>
                            <option :value="patronus" v-for="patronus in eliminateRepeatedPatronus($store.state.characters)" :key="patronus">
                                {{patronus}}
                            </option>
                        </select>
                    </div>
                    <!-- Filter by ancestry -->
                    <div class="col-md-12 mb-4">
                        <select class="form-select py-2 text-capitalize" v-model="filterByAncestry">
                            <option value="">All Ancestries</option>
                            <option :value="ancestry" v-for="ancestry in eliminateRepeatedAncestry($store.state.characters)" :key="ancestry">
                                {{ancestry}}
                            </option>
                        </select>
                    </div>
                    <!-- Filter by eye colour -->
                    <div class="col-md-12 mb-4">
                        <select class="form-select py-2 text-capitalize" v-model="filterByEyeColour">
                            <option value="">All Eye Colours</option>
                            <option :value="eyeColour" v-for="eyeColour in eliminateRepeatedEyeColour($store.state.characters)" :key="eyeColour">
                                {{eyeColour}}
                            </option>
                        </select>
                    </div>
                    <!-- Filter by specie -->
                    <div class="col-md-12 mb-4">
                        <select class="form-select py-2 text-capitalize" v-model="filterBySpecie">
                            <option value="">All Species</option>
                            <option :value="specie" v-for="specie in eliminateRepeatedSpecie($store.state.characters)" :key="specie">
                                {{specie}}
                            </option>
                        </select>
                    </div>
                    <!-- Filter by gender -->
                    <div class="col-md-12 mb-4">
                        <select class="form-select py-2 text-capitalize" v-model="filterByGender">
                            <option value="">All Genders</option>
                            <option :value="gender" v-for="gender in eliminateRepeatedGender($store.state.characters)" :key="gender">
                                {{gender}}
                            </option>
                        </select>
                    </div>
                    <!-- Filter by hair colour -->
                    <div class="col-md-12 mb-4">
                        <select class="form-select py-2 text-capitalize" v-model="filterByHairColour">
                            <option value="">All Hair Colours</option>
                            <option :value="hairColour" v-for="hairColour in eliminateRepeatedHairColour($store.state.characters)" :key="hairColour">
                                {{hairColour}}
                            </option>
                        </select>
                    </div>
              </div>
          </div>

          <div class="col-xl-10 col-lg-9 col-md-8">
            <div class="row mb-lg-0 mb-4">
                <!-- Search Characters -->
                <div class="col-xl-9 col-lg-8">
                    <div class="input-group mb-4">
                        <span class="input-group-text bg-white" id="basic-addon1">
                            <i class="fas fa-search"></i>
                        </span>
                        <input type="text" class="form-control py-2" placeholder="Search for characters..." aria-label="Username" aria-describedby="basic-addon1" v-model="search">
                    </div>
                </div>
                <!-- Random Character -->
                <div class="col-xl-3 col-lg-4">
                    <router-link :to="`/character/${randomCharacter}`">
                        <button class="btn btn-danger py-2 w-100" @click="getRandomCharacter($store.state.characters)">
                            <i class="fas fa-random mx-1"></i>
                            Random Character
                        </button>
                    </router-link>
                </div>
            </div>
             <!-- Matching # of characters -->
            <div v-if="matchingCharacters" class="text-white fs-5 mt-md-1 mt-3 mb-4">
                <p v-if="filterCharacters.length == 0">No characters for 
                    <div class="badge rounded-pill bg-secondary mx-1" v-if="search">{{search}}</div>
                    <div class="badge rounded-pill bg-secondary mx-1" v-if="filterByHouse">{{filterByHouse}}</div>
                    <div class="badge rounded-pill bg-secondary mx-1" v-if="filterByPatronus">{{filterByPatronus}}</div>
                    <div class="badge rounded-pill bg-secondary mx-1" v-if="filterByAncestry">{{filterByAncestry}}</div>
                    <div class="badge rounded-pill bg-secondary mx-1" v-if="filterByEyeColour">{{filterByEyeColour}}</div>
                    <div class="badge rounded-pill bg-secondary mx-1" v-if="filterBySpecie">{{filterBySpecie}}</div>
                    <div class="badge rounded-pill bg-secondary mx-1" v-if="filterByHairColour">{{filterByHairColour}}</div>
                    <div class="badge rounded-pill bg-secondary mx-1" v-if="filterByGender">{{filterByGender}}</div>
                </p>
                <p v-else>{{filterCharacters.length}} character(s) found for 
                    <div class="badge rounded-pill bg-secondary mx-1" v-if="search">{{search}}</div>
                    <div class="badge rounded-pill bg-secondary mx-1" v-if="filterByHouse">{{filterByHouse}}</div>
                    <div class="badge rounded-pill bg-secondary mx-1" v-if="filterByPatronus">{{filterByPatronus}}</div>
                    <div class="badge rounded-pill bg-secondary mx-1" v-if="filterByAncestry">{{filterByAncestry}}</div>
                    <div class="badge rounded-pill bg-secondary mx-1" v-if="filterByEyeColour">{{filterByEyeColour}}</div>
                    <div class="badge rounded-pill bg-secondary mx-1" v-if="filterBySpecie">{{filterBySpecie}}</div>
                    <div class="badge rounded-pill bg-secondary mx-1" v-if="filterByHairColour">{{filterByHairColour}}</div>
                    <div class="badge rounded-pill bg-secondary mx-1" v-if="filterByGender">{{filterByGender}}</div>
                </p>
            </div>
            <!-- Display Characters -->
            <div class="d-flex flex-wrap justify-content-md-between justify-content-center mt-md-0 mt-5">
                <div class="card mb-4 w-100" v-for="character in filterCharacters" :key="character">
                    {{character.length}}
                    <div class="row g-0">
                        <div class="col-md-4 character-img">
                            <img v-if="character.image" :src="character.image" class="img-fluid rounded-start" :alt="character.name">
                            <img v-else src="https://dummyimage.com/480x640/f4f4f4/000000.png&text=Image+not+found" class="img-fluid rounded-start" :alt="character.name">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h4 class="card-title mb-3">{{getData(character.name)}}</h4>
                                <p class="my-2"><span class="text-muted">Portrayed by: </span>{{getData(character.actor)}}</p>
                                <p class="my-2 text-muted">House: 
                                    <span class="house" :class="{ gryffindor: character.house == 'Gryffindor',
                                            slytherin: character.house == 'Slytherin',
                                            ravenclaw: character.house == 'Ravenclaw',
                                            hufflepuff: character.house == 'Hufflepuff',
                                            unknownHouse: character.house == ''  }">
                                    </span> 
                                    <span class="text-dark">{{getData(character.house)}}</span>
                                </p>
                                <p class="my-2"><span class="text-muted">Patronus: </span>{{getData(character.patronus)}}</p>
                                <router-link :to="'/character/' + character.name" class="text-decoration-none d-inline-block mt-5">
                                    <button class="btn btn-outline-dark btn-sm d-flex align-items-center">
                                        More Info
                                        <i class="fas fa-angle-double-right mx-1"></i>
                                    </button>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

          </div>
      </div>
  </div>
</template>


<script>
export default {
    name: 'Characters',
    data(){
        return{
            search: '',
            filterByHouse: '',
            filterByPatronus: '',
            filterByAncestry: '',
            filterByEyeColour: '',
            filterBySpecie: '',
            filterByHairColour: '',
            filterByGender: '',
            matchingCharacters: false,
            randomCharacter: ''
        }
    },
    computed:{
        filterCharacters() {
            return this.$store.state.characters.filter(character => {
                if(this.search || this.filterByHouse || this.filterByPatronus || this.filterByAncestry || this.filterByEyeColour || this.filterBySpecie || this.filterByHairColour || this.filterByGender){
                    this.matchingCharacters = true
                }else if(this.search == ''){
                    this.matchingCharacters = false
                }
                return character.name.toLowerCase().includes(this.search.toLowerCase()) &&
                        character.house.includes(this.filterByHouse) &&
                        character.patronus.includes(this.filterByPatronus) &&
                        character.ancestry.includes(this.filterByAncestry) &&
                        character.eyeColour.includes(this.filterByEyeColour) &&
                        character.species.includes(this.filterBySpecie) &&
                        character.hairColour.includes(this.filterByHairColour) &&
                        this.capitalized(character.gender).includes(this.filterByGender)
            })
        }
    },
    methods:{
        getData(data){
            if(data){
                if(data.length > 20){
                    return data.slice(0,20) + '...'
                }else{
                    return data
                }
            }else{
                return 'Undefined'
            }
        },
        eliminateRepeatedHouse(house){
            let arr = []
            house.forEach(item => {
                if(item.house != '' && item.house == 'Gryffindor' || item.house == 'Slytherin' || item.house == 'Hufflepuff' || item.house == 'Ravenclaw'){
                    arr.push(item.house)
                }
            })
            return [...new Set(arr)];
        },
        eliminateRepeatedPatronus(patronus){
            let arr = []
            patronus.forEach(item => {
                if(item.patronus != ''){
                    arr.push(item.patronus)
                }
            })
            return [...new Set(arr)];
        },
        eliminateRepeatedAncestry(ancestry){
            let arr = []
            ancestry.forEach(item => {
                if(item.ancestry != ''){
                    arr.push(item.ancestry)
                }
            })
            return [...new Set(arr)];
        },
        eliminateRepeatedEyeColour(eyeColour){
            let arr = []
            eyeColour.forEach(item => {
                if(item.eyeColour != ''){
                    arr.push(item.eyeColour)
                }
            })
            return [...new Set(arr)];
        },
        eliminateRepeatedSpecie(specie){
            let arr = []
            specie.forEach(item => {
                if(item.species != ''){
                    arr.push(item.species)
                }
            })
            return [...new Set(arr)];
        },
        eliminateRepeatedGender(gender){
            let arr = []
            gender.forEach(item => {
                if(item.gender != ''){
                    arr.push(item.gender.charAt(0).toUpperCase() + item.gender.slice(1))
                }
            })
            return [...new Set(arr)];
        },
        eliminateRepeatedHairColour(hairColour){
            let arr = []
            hairColour.forEach(item => {
                if(item.hairColour != ''){
                    arr.push(item.hairColour)
                }
            })
            return [...new Set(arr)];
        },
        capitalized(data){
            return data.charAt(0).toUpperCase() + data.slice(1)
        },
        getRandomCharacter(characters){
            const randomNumber = Math.floor(Math.random() * characters.length)
            this.randomCharacter = characters[randomNumber].name
        }
    }
}
</script>

<style lang="scss" scoped>
    .card{
        max-width: 32.75rem;
        .character-img{
            height: 16rem;
            @media(max-width: 47.5rem){
                height: 32rem;
            }
            img{
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
        .card-body{
            p{
                text-transform: capitalize;
                span{
                    text-transform: none;
                }
            }
        }
    }
</style>
<template>
    <Header />
    <div class="container-md mt-5">
        <div v-for="character in $store.state.characters" :key="character.name">
            <div v-if="character.name == $route.params.name">
                <div class="row mb-5">
                    <div class="col-md-6 character-img">
                        <img v-if="character.image" :src="character.image" :alt="character.name" class="img-fluid img-thumbnail">
                        <img v-else src="https://dummyimage.com/480x840/f4f4f4/000000.png&text=Image+not+found" class="img-fluid rounded-start" :alt="character.name">
                    </div>
                    <div class="col-md-6 mt-lg-0 mt-4 text-white fs-5 mx-lg-3 mx-0 d-flex flex-column justify-content-between">
                        <div class="row">
                            <h1 class="mb-4">{{character.name}}</h1>
                            <div class="col-lg-6">
                                <p class="my-3">Portrayed by: <strong>{{getData(character.actor)}}</strong></p>
                                <p class="my-3">Dob: <strong>{{formatDate(character.dateOfBirth)}}</strong></p>
                                <p class="my-3">House: 
                                    <strong>
                                        <span class="house" :class="{ gryffindor: character.house == 'Gryffindor',
                                                slytherin: character.house == 'Slytherin',
                                                ravenclaw: character.house == 'Ravenclaw',
                                                hufflepuff: character.house == 'Hufflepuff',
                                                unknownHouse: character.house == ''  }">
                                        </span> 
                                        {{getData(character.house)}}
                                    </strong>
                                </p>
                                <p class="my-3">Patronus: <strong>{{getData(character.patronus)}}</strong></p>
                                <p class="my-3">Status: <strong>{{formatStatus(character.alive)}}</strong></p>
                                <p class="my-3">Ancestry: <strong>{{getData(character.ancestry)}}</strong></p>
                            </div>
                            <div class="col-lg-6">
                                <p class="my-3">Hair Colour: <strong>{{getData(character.hairColour)}}</strong></p>
                                <p class="my-3">Species: <strong>{{getData(character.species)}}</strong></p>
                                <p class="my-3">Eye Colour: <strong>{{getData(character.eyeColour)}}</strong></p>
                                <p class="my-3">Wand Core: <strong>{{getData(character.wand.core)}}</strong></p>
                                <p class="my-3">Wand Wood: <strong>{{getData(character.wand.wood)}}</strong></p>
                            </div>
                        </div>
                        <div class="d-inline-block mt-5">
                            <router-link to="/" class="text-decoration-none">
                                <button class="btn btn-dark border border-1 border-white py-2 px-3">
                                    <i class="fas fa-arrow-left mx-1"></i>
                                    Back to Main Page
                                </button>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Header from '../components/Header.vue'
export default {
  name: 'CharacterDetails',
  components: { Header },
  data(){
      return{

      }
  },
  methods:{
      getData(data){
          if(data){
              return data
          }else{
              return 'Undefined'
          }
      },
      formatDate(date){
          const day = date.slice(0,2)
          const month = date.slice(3,5)
          const year = date.slice(6,10)
          const fullDob = day + '/' + month + '/' + year

          if(date){
              return fullDob
          }else{
              return 'Undefined'
          }
      },
      formatStatus(status){
          if(status){
              if(status != ''){
                  return 'Alive'
              }else{
                  return 'Dead'
              }
          }else{
              return 'Undefined'
          }
      }
  }

}
</script>

<style lang="scss" scoped>
    .character-img{
        width: 28rem;
        height: 36rem;
        img{
            height: 100%;
            width: 100%;
            object-fit: cover;
        }
    }
    strong{
        text-transform: capitalize;
    }
</style>
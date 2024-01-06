<template>
  <div :class="$q.dark.isActive ? 'text-white bg-dark' : 'bg-grey-3 text-dark'">
    <q-toolbar>
      <div class="items-center row justify-center">
        <div class="col-2 q-mx-md">
          <q-btn class="q-mr-xs" flat> home1 home1</q-btn>
          <q-btn class="q-mr-xs" flat> home1 home1</q-btn>
          <q-btn class="q-mr-xs" flat> home1 home1</q-btn>
          <q-btn class="q-mr-xs" flat> home1 home1</q-btn>
        </div>
        <div class="col-2 q-mx-md">
          <q-btn class="q-mr-xs" flat> home2 home2</q-btn>
          <q-btn class="q-mr-xs" flat> home2 home2</q-btn>
          <q-btn class="q-mr-xs" flat> home2 home2</q-btn>
          <q-btn class="q-mr-xs" flat> home2 home2</q-btn>
        </div>
        <div class="col-2 q-mx-md">
          <q-btn class="q-mr-xs" flat> home3 home3</q-btn>
          <q-btn class="q-mr-xs" flat> home3 home3</q-btn>
          <q-btn class="q-mr-xs" flat> home3 home3</q-btn>
          <q-btn class="q-mr-xs" flat> home3 home3</q-btn>
        </div>
        <div class="col-2 q-mx-md">
          <q-btn class="q-mr-xs" flat> home4 home4</q-btn>
          <q-btn class="q-mr-xs" flat> home4 home4</q-btn>
          <q-btn class="q-mr-xs" flat> home4 home4</q-btn>
          <q-btn class="q-mr-xs" flat> home4 home4</q-btn>
        </div>
      </div>
    </q-toolbar>
    <q-separator inset size="1px" style="width: 80%; margin-left: 10%" />
    <q-toolbar inset class="items-center row justify-center">
      <q-breadcrumbs active-color="primary" style="font-size: 16px">
        <q-breadcrumbs-el label="Home" icon="home" />
        <q-breadcrumbs-el label="Components" icon="widgets" />
        <q-breadcrumbs-el label="Toolbar" />
      </q-breadcrumbs>
    </q-toolbar>
  </div>
</template>
  
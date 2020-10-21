<template>
    <h2>Active Goals</h2>
</template>

<badge-list></badge-list>
<user-info
    :full-name="activeUser.name"
    :info-text="activeUser.description"
    :role="activeUser.role"
></user-info>
<course-goals>
    <template #default="slotProps">
    <h2>{{ slotProps.item }}</h2>
    <p>{{ slotProps['another-prop'] }}</p>
    </template>
</course-goals>

<!-- <course-goals #default="slotProps">
    <h2>{{ slotProps.item }}</h2>
    <p>{{ slotProps['another-prop'] }}</p>
</course-goals> -->
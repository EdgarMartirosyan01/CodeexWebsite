<template>
  <el-dropdown>
    <span class="el-dropdown-link">
      {{ $t('navbar.about') }}
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item divided>About Codeex</el-dropdown-item>
        <el-dropdown-item divided>Outstaffing</el-dropdown-item>
        <el-dropdown-item divided>{{ $t('footer.services.expertiseSection.technologies') }}</el-dropdown-item>
        <el-dropdown-item divided>Portfolio</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script>
export default {
  name: "AboutDropDown",
}
</script>

<style scoped>
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
</style>
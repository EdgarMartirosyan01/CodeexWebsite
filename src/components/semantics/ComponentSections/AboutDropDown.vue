<template>
    <el-dropdown>
    <span class="el-dropdown-link">
      {{ $t('navbar.about') }}
    </span>
        <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item divided class="dropdown-item">
                    <router-link :to="{ path: '/about-us' }">About Codeex</router-link>
                </el-dropdown-item>
                <el-dropdown-item divided class="dropdown-item">
                    <router-link :to="{ path: '/outstaffing' }">Outstaffing</router-link>
                </el-dropdown-item>
                <el-dropdown-item divided class="dropdown-item">
                    <router-link :to="{ path: '/technologies' }">{{
                            $t('footer.services.expertiseSection.technologies')
                        }}
                    </router-link>
                </el-dropdown-item>
                <el-dropdown-item divided class="dropdown-item">
                    <router-link :to="{ path: '/portfolio' }">Portfolio</router-link>
                </el-dropdown-item>
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

.dropdown-item a {
    font-size: 18px;
    font-weight: 500;
    color: #545454;
    text-decoration: none;
    cursor: pointer;
}

.dropdown-item a:hover {
    font-weight: bold;
}
.el-dropdown span {
cursor: pointer;
}

</style>

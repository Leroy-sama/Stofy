<template>
    <header>
        <nav>
            <h1 class="logo">BlackM</h1>
            <ul>
                <li>
                    <a href="#">Products</a>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
            </ul>
            <div class="register">
                <a href="#" class="regis">Register</a>
            </div>
        </nav>
    </header>
</template>

<script setup></script>

<style scoped>
    * {
        list-style: none;
        text-decoration: none;
    }

    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    nav ul {
        display: flex;
        gap: 2em;
    }
</style>

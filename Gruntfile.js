module.exports = function(grunt) {
  grunt.initConfig({
    less: {
      development: {
        options: {
          paths: ['src'] // Caminho para os arquivos LESS
        },
        files: {
          'src/style/main.css': 'src/style/main.less' // Compilar main.less em main.css dentro da pasta src/style
        }
      },
    },
    uglify: {
      my_target: {
        files: {
          'src/scripts/main.min.js': ['src/scripts/main.js'] // Minificar main.js em main.min.js na pasta src/scripts
        }
      },
    },
    watch: {
      styles: {
        files: ['src/style/*.less'], // Observar mudanças nos arquivos LESS dentro da pasta src/style
        tasks: ['less'], // Executar a tarefa less quando um arquivo LESS for alterado
        options: {
          livereload: true, // Ativar o recarregamento automático do navegador
        },
      },
      scripts: {
        files: ['src/scripts/*.js'], // Observar mudanças nos arquivos JavaScript
        tasks: ['uglify'], // Executar a tarefa uglify quando um arquivo JavaScript for alterado
        options: {
          livereload: true, // Ativar o recarregamento automático do navegador
        },
      },
    },
  });

  // Carregar plugins
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Registrar tarefas
  grunt.registerTask('default', ['less', 'uglify', 'watch']);
};

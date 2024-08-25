module Jekyll
    module ReadingTime
      def reading_time(content)
        words_per_minute = 200 # Promedio de palabras por minuto
        words = content.split(/\s+/).size
        time = (words.to_f / words_per_minute).ceil
        "#{time} min lectura"
      end
    end
  end
  
  Liquid::Template.register_filter(Jekyll::ReadingTime)  
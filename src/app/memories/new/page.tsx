'use client'

import MediaPicker from "@/components/MediaPicker";
import { Camera, ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function NewMemory(){
  return(
    <div className="flex flex-col flex-1 gap-4 p-16">
      <Link href='/' className="flex items-center gap-1 text-sm text-gray-200 hover:text-gray-100">
        <ChevronLeft className="h-4 w-4" />
        Voltar à timeline
      </Link>

      <form className="flex flex-1 flex-col gap-2">
        <div className="flex items-center gap-4">
          <label htmlFor="media" className="flex cursor-pointer items-center gap-1.5 text-sm text-gray-200 hover:text-gray-100">
            <Camera className="w-4 h-4" />
            Anexar midia
          </label>

          <label htmlFor="isPublic" className="flex items-center gap-1.5 text-sm text-gray-200 hover:text-gray-100">
            <input type="checkbox" name="isPublic" id="isPublic" value='true' className="h-4 w-4 rounded border-gray-400 bg-gray-700 text-purple-500" />
            Tornar memória publica
          </label>
        </div>

        <MediaPicker />

        <textarea 
        name="content" 
        spellCheck={false} 
        className="w-full flex-1 resize-none rounded border-0 bg-transparent p-0 text-lg leading-relaxed text-gray-100 placeholder:text-gray-400 focus:ring-0" 
        placeholder="Fique livre para adicionar fotos, videos e relatos sobre essa experiência que você quer lembrar para sempre."
        />
        
      </form>
    </div>
  )
}
import readline from "readline"
import chalk from "chalk"
import fs from "fs"
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

const filecreation=()=>{
    rl.question(chalk.blue("Enter Your Filename: "),(filename)=>{
        rl.question(chalk.blue("Enter the content :"),(content)=>{
            fs.writeFile(`${filename}.txt`,content,(err)=>{
                if(err){
                    console.error(chalk.red(err));
                    rl.close();
                }
                else{console.log(chalk.green("file created successfully"));
                    rl.close();
                    
                }

            })
        })
    })

}


filecreation();
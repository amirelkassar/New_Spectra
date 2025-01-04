using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Spectra.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class AddationalColsDeleted : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_RolePermissions_AspNetRoles_AppRoleId",
                table: "RolePermissions");

            migrationBuilder.DropIndex(
                name: "IX_RolePermissions_AppRoleId",
                table: "RolePermissions");

            migrationBuilder.DropColumn(
                name: "AppRoleId",
                table: "RolePermissions");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "AppRoleId",
                table: "RolePermissions",
                type: "text",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_RolePermissions_AppRoleId",
                table: "RolePermissions",
                column: "AppRoleId");

            migrationBuilder.AddForeignKey(
                name: "FK_RolePermissions_AspNetRoles_AppRoleId",
                table: "RolePermissions",
                column: "AppRoleId",
                principalTable: "AspNetRoles",
                principalColumn: "Id");
        }
    }
}
